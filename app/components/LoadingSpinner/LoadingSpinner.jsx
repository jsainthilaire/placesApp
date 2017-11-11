import React from 'react'
import { loadingContainer, loading } from './styles.css'

const LoadingSpinner = () => (
  <div className={loadingContainer}>
    <div className={loading} />
  </div>
)


export default LoadingSpinner
