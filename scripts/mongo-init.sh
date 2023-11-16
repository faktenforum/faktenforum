set -e

mongosh -u ${MONGO_INITDB_ROOT_USERNAME} -p ${MONGO_INITDB_ROOT_PASSWORD} --authenticationDatabase admin <<EOF
use ${MONGODB_AGENDA_DB}

db.createUser({
  user: '${MONGODB_AGENDA_USER}',
  pwd: '${MONGODB_AGENDA_PASSWORD}',
  roles: [{ role: 'readWrite', db: '${MONGODB_AGENDA_DB}' },
  { role: 'dbOwner', db: '${MONGODB_AGENDA_DB}' }],
});

EOF
