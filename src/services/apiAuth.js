import supabase from "./supabase";

export async function login({ username, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: username,
    password,
  });
  if (error) {
    console.error(error);
    throw new Error("there has been an error signing you in");
  }
  return data;
}

export async function getUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
    throw new Error("There has been an error signing you out");
  }
}

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) {
    console.error(error);
    throw new Error("There has been an error creating your account");
  }
  return data;
}

export async function updateUser({ fullName, avatar, password }) {
  let updateData;
  if (!password) {
    updateData = { data: { fullName } };
  }
  if (!fullName) {
    updateData = { password };
  }
  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error("There has been an error!");

  if (!avatar) return data;

  const avatarName = `avatar-${data.user.id}-${Math.random()
    .toString()
    .replaceAll(".", "0")}`;
  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(avatarName, avatar);
  if (uploadError) {
    throw new Error("There has been an error uploading your Avatar!");
  }
  const avatarUrl = `https://tfstniqxganylntmsbfg.supabase.co/storage/v1/object/public/avatars/${avatarName}`;
  const { data: data2, error: error2 } = await supabase.auth.updateUser({
    data: { avatar: avatarUrl },
  });

  if (error2) throw new Error("There has been an error");
  return data2;
}
