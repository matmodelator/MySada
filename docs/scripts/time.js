/*
========================================
TIME HELPERS (ЛОКАЛЬНОЕ ВРЕМЯ)
единая точка для всех страниц
========================================
*/

export function getTodayRange() {
  const now = new Date()

  const start = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0, 0, 0
  )

  const end = new Date(start)
  end.setDate(end.getDate() + 1)

  return {
    start: start.toISOString(),
    end: end.toISOString()
  }
}
