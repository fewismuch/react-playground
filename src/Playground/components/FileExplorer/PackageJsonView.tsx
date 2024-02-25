import { FC, useEffect, useState } from 'react'

interface IProps {
  data: string
  onChange?: (data: any) => void
}

export const PackageJsonView: FC<IProps> = (props) => {
  const { data, onChange } = props
  const [packageJson, setPackageJson] = useState<any>({ dependencies: {} })
  const [loadPkgLoading, setloadPkgLoading] = useState(false)

  const delPkg = (key: string) => {
    const newDependencies = {
      ...packageJson.dependencies,
    }
    // @ts-ignore
    delete newDependencies[key]
    const newPackageJson = {
      ...packageJson,
      dependencies: newDependencies,
    }
    setPackageJson(newPackageJson)
    onChange?.(newPackageJson)
  }

  const handleAddPkg = (e: any) => {
    const pkgNameInput = e.target.value
    if (!pkgNameInput) return
    const [pkgName] = pkgNameInput.split('@')
    setloadPkgLoading(true)
    fetch(`https://data.jsdelivr.com/v1/packages/npm/${pkgNameInput}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 404) {
          console.error('pkg do not exist')
          setloadPkgLoading(false)
        } else {
          const newDependencies = {
            ...packageJson.dependencies,
            [pkgName]: res.tags?.latest || res.version,
          }
          const newPackageJson = {
            ...packageJson,
            dependencies: newDependencies,
          }
          setPackageJson(newPackageJson)
          setloadPkgLoading(false)
          onChange?.(newPackageJson)
        }
      })
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleAddPkg(event)
      event.target.value = ''
    } else if (event.key === 'Escape') {
      event.preventDefault()
      event.target.value = ''
    }
  }

  useEffect(() => {
    if (data) {
      try {
        setPackageJson(JSON.parse(data))
      } catch (e) {
        console.error(e)
      }
    }
  }, [data])

  return (
    <div>
      <input
        type='text'
        onKeyDown={handleKeyDown}
        disabled={loadPkgLoading}
        placeholder={loadPkgLoading ? 'installing dependencies' : 'Enter package name'}
      />

      {Object.keys(packageJson.dependencies).map((key) => {
        return (
          <div key={key}>
            {key}:{packageJson?.dependencies?.[key]}
            <button style={{ marginLeft: 20 }} onClick={() => delPkg(key)}>
              ×
            </button>
          </div>
        )
      })}
    </div>
  )
}
