import type { Alpine } from 'alpinejs'
import { index } from './pages/index'

export default (Alpine: Alpine) => {
  Alpine.data('index', index)
}