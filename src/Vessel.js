class Vessel {
  constructor(v) {
    this.id = v.vesselID
    this.name = v.name
    this.inService = v.inservice
    this.lastDock = v.lastdock
    this.leftDock = `${v.leftdock} ${v.leftdockAMPM}`
    this.nextDock = v.aterm
    this.eta = `${v.eta} ${v.etaAMPM}`
    this.etaReason = v.etaBasis
    this.departDelayed = v.departDelayed
    this.nextDeparture = `${v.nextdep} ${v.nextdepAMPM}`
    this.lat = v.lat
    this.lon = v.lon
    this.speed = v.speed
    this.headingText = v.headtxt
  }

  isInService() {
    return this.inService === 'True'
  }

  isDelayed() {
    return this.departDelayed === 'Y'
  }
}

export default Vessel