const STORAGE_KEY = 'resumeData'

export function storeData(data) {
  localStorage.setItem(STORAGE_KEY, data)
}

export function clearData() {
  localStorage.clear()
}

export function getData() {
  return localStorage.getItem(STORAGE_KEY)
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
