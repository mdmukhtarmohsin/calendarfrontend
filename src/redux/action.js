const url = "https://calendarbackend-production-3741.up.railway.app/user/";

export async function getAll(dispatch) {
  try {
    const res = await fetch(url + "get");
    const users = await res.json();
    console.log(users, "from action");
    dispatch({ type: "GET_ALL", payload: users });
  } catch (error) {
    console.log(error);
  }
}

export async function add(dispatch, data) {
  try {
    const res = await fetch(url + "add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newUser = await res.json();
    console.log(newUser);
    dispatch({ type: "ADD_NEW", payload: newUser });
  } catch (error) {
    console.log(error);
  }
}

export async function getSearch(dispatch, query) {
  try {
    const res = await fetch(url + "search/" + query);
    const users = await res.json();
    dispatch({ type: "GET_ALL", payload: users });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(dispatch, id) {
  try {
    const res = await fetch(url + "delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await res.json();
    console.log(user);
    dispatch({ type: "DELETE_USER", payload: id });
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(dispatch, data) {
  try {
    const res = await fetch(url + "edit/" + data._id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newUser = await res.json();
    console.log(newUser);
    dispatch({ type: "UPDATE_NEW", payload: newUser });
  } catch (error) {
    console.log(error);
  }
}
