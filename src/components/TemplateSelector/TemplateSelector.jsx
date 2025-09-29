import styles from './TemplateSelector.module.css'

export default function TemplateSelector({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={styles.templateSelector}
    >
      <option value="ats">ATS Compact Template</option>
      <option value="ats2">ATS Template</option>
      <option value="clean">Clean Template</option>
      <option value="modern">Modern Template</option>
    </select>
  )
}
