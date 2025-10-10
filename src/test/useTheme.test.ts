import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useTheme } from '../hooks/useTheme'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: query === '(prefers-color-scheme: dark)',
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

describe('useTheme Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorageMock.getItem.mockReturnValue(null)
  })

  it('initializes with system theme', () => {
    // Mock system prefers dark mode
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: true, // System prefers dark
        media: '(prefers-color-scheme: dark)',
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })

    const { result } = renderHook(() => useTheme())
    
    expect(result.current.theme).toBe('system')
    expect(result.current.resolvedTheme).toBe('dark')
    expect(result.current.isLight).toBe(false)
    expect(result.current.isDark).toBe(true)
    expect(result.current.isSystem).toBe(true)
  })

  it('changes theme to light', () => {
    const { result } = renderHook(() => useTheme())
    
    act(() => {
      result.current.changeTheme('light')
    })
    
    expect(result.current.theme).toBe('light')
    expect(result.current.resolvedTheme).toBe('light')
    expect(result.current.isLight).toBe(true)
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light')
  })

  it('changes theme to dark', () => {
    const { result } = renderHook(() => useTheme())
    
    act(() => {
      result.current.changeTheme('dark')
    })
    
    expect(result.current.theme).toBe('dark')
    expect(result.current.resolvedTheme).toBe('dark')
    expect(result.current.isDark).toBe(true)
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark')
  })

  it('toggles theme correctly', () => {
    const { result } = renderHook(() => useTheme())
    
    // Start with light
    act(() => {
      result.current.changeTheme('light')
    })
    
    // Toggle to dark
    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.theme).toBe('dark')
    
    // Toggle to system
    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.theme).toBe('system')
    
    // Toggle back to light
    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.theme).toBe('light')
  })

  it('loads theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('dark')
    
    const { result } = renderHook(() => useTheme())
    
    expect(result.current.theme).toBe('dark')
    expect(localStorageMock.getItem).toHaveBeenCalledWith('theme')
  })
})
