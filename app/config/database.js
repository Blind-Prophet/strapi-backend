const {ConnectionString} = require('connection-string');

  const parsed = new ConnectionString('postgres://nhzjizcscxgpva:eabd54208622825698dc546dd8209ace06683b2c56d9fde69cdcd6193ce6b15f@ec2-35-171-109-11.compute-1.amazonaws.com:5432/d6o4iig8ioq8bl');
  //const [username, password] = parsed.auth.split(':');

  let settings = {
    client: 'postgres'
  };
  settings.host = parsed.hosts[0].name;
  settings.port = Number(parsed.hosts[0].port);
  settings.database = parsed.path[0];
  settings.username = parsed.user;
  settings.password = parsed.password;
  settings.ssl = true;


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

