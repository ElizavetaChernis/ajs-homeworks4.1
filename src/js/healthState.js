export default function healthState(status) {
  if (status.health > 50) {
    return 'healthy';
  }

  if (status.health >= 15 && status.health <= 50) {
    return 'wounded';
  }

  return 'critical';
}