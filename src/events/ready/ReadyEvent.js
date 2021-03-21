const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client) {
    client.user.setPresence({
        activity: {
          name: 'NITRO CENTRAL',
          type: 'WATCHING',
        },
        status: 'dnd'
      })
      .catch(console.error);
  }
}