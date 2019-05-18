{
  percentThreshold: [95],
  deleteIdleStats: true,
  deleteGauges: true,
  flushInterval: 60000,
  port: 8125,
  dumpMessages: false,
  backends: ["statsd-librato-backend"],
  librato: {
    email:  process.env.LIBRATO_EMAIL,
    token:  process.env.LIBRATO_TOKEN,
    source: "statsd0",
    writeToLegacy: true
  }
}
