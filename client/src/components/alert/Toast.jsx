import './toast.css'

const Toast = ({ message, type }) => {
  return (
    <div className={`${type} toast`}>
      <p>{message}</p>
      <article></article>
    </div>
  )
}

export default Toast
