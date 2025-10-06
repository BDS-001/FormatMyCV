import { useState } from 'react'
import useResume from '../../context/resumeContext'
import styles from './AccentColor.module.css'

export default function AccentColor() {
  const {
    accentColor,
    setAccentColor,
    accentColorEnabled,
    setAccentColorEnabled,
  } = useResume()
  const [colorInput, setColorInput] = useState(accentColor)

  const handleColorChange = e => {
    const newColor = e.target.value
    setColorInput(newColor)
    setAccentColor(newColor)
  }

  const handleTextInputChange = e => {
    const newColor = e.target.value
    setColorInput(newColor)
    if (/^#[0-9A-F]{6}$/i.test(newColor)) {
      setAccentColor(newColor)
    }
  }

  return (
    <div className="formSection">
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={accentColorEnabled}
          onChange={e => setAccentColorEnabled(e.target.checked)}
        />
        Use a custom accent color?
      </label>
      <div className="formGroup">
        <label htmlFor="accentColorHex">Accent Color</label>
        <div
          className={`${styles.controlsRow} ${!accentColorEnabled ? styles.disabled : ''}`}
        >
          <input
            type="color"
            id="accentColorPicker"
            value={accentColor}
            onChange={handleColorChange}
            className={styles.colorInput}
            disabled={!accentColorEnabled}
            aria-label="Pick color"
          />
          <input
            type="text"
            id="accentColorHex"
            className={styles.hexInput}
            value={colorInput}
            onChange={handleTextInputChange}
            maxLength={7}
            placeholder="#57372c"
            pattern="^#[0-9A-Fa-f]{6}$"
            title="Hex color like #57372C"
            disabled={!accentColorEnabled}
          />
          <span
            className={styles.swatch}
            style={{
              backgroundColor: accentColorEnabled ? accentColor : 'transparent',
            }}
            role="img"
            aria-label="Color preview"
          />
        </div>
      </div>
    </div>
  )
}
