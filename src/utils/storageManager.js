const STORAGE_KEY = 'resumeData'

export function storeData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function clearData() {
  localStorage.clear()
}

export function getData() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : null
}

let saveTimer = null

export function save(data, delay = 6000) {
  if (saveTimer) {
    clearTimeout(saveTimer)
  }

  saveTimer = setTimeout(() => {
    storeData(data)
    saveTimer = null
  }, delay)
}
