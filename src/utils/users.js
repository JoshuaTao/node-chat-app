const users = [];

function addUser({ id, username, room }) {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  let existingUser = users.find((user) => {
    return user.username === username && user.room === room;
  });

  if (existingUser) {
    return {
      error: "User has already existed!",
    };
  }

  let user = { id, username, room };
  users.push(user);
  return {user};
}

function removeUser(id) {
  let index = users.findIndex((user) => user.id === id);
  if (index > -1) {
    return users.splice(index, 1)[0];
  }
}

function getUser(id) {
  return users.find((user) => user.id === id);
}

function getUserInRoom(room) {
  return users.filter((user) => user.room === room);
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUserInRoom,
};
