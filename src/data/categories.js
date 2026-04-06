// WHY THIS FILE EXISTS:
// Categories are used in 3 places — the transaction table (badge colors),
// the pie chart (slice colors), and the modal form (dropdown options).
// Centralising here means you change a color once and it updates everywhere.
// This is the DRY principle: Don't Repeat Yourself.
 
export const CATEGORIES = [
  { name: 'Food',          color: '#ef4444', bg: '#fef2f2' },
  { name: 'Bills',         color: '#3b82f6', bg: '#eff6ff' },
  { name: 'Travel',        color: '#f59e0b', bg: '#fffbeb' },
  { name: 'Entertainment', color: '#a855f7', bg: '#faf5ff' },
  { name: 'Health',        color: '#10b981', bg: '#ecfdf5' },
  { name: 'Shopping',      color: '#ec4899', bg: '#fdf2f8' },
  { name: 'Salary',        color: '#22c55e', bg: '#f0fdf4' },
  { name: 'Freelance',     color: '#14b8a6', bg: '#f0fdfa' },
  { name: 'Investment',    color: '#6366f1', bg: '#eef2ff' },
  { name: 'Other',         color: '#8b5cf6', bg: '#f5f3ff' },
]
 
// WHY A MAP?
// O(1) lookup by name. Instead of CATEGORIES.find(c => c.name === 'Food')
// every time, you just do CATEGORY_MAP['Food']. Much faster, cleaner code.
export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map(c => [c.name, c])
)
 
// Just the names, for dropdowns
export const CATEGORY_NAMES = CATEGORIES.map(c => c.name)
