const {ConnectionString} = require('connection-string');

  const parsed = new ConnectionString(process.env.DATABASE_URL);

  let settings = {
    client: 'postgres'
  };
  settings.host = parsed.hosts[0].name;
  settings.port = Number(parsed.hosts[0].port);
  settings.database = parsed.path[0];
  settings.username = parsed.user;
  settings.password = parsed.password;
  settings.ssl = process.env.DATABASE_SSL;


module.exports = {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings,
      options: {}
    }
  }
};

