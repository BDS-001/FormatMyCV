import styles from './TemplateSelector.module.css'

export default function TemplateSelector({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={styles.templateSelector}
    >
      <option value="modern">Modern Template</option>
      <option value="ats">ATS Template</option>
    </select>
  )
}
