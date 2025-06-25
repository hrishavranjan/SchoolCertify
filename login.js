function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

async function resetPassword() {
  const email = document.getElementById("email").value.trim();
  const resetMessage = document.getElementById("resetMessage");

  if (!email) {
    resetMessage.textContent = "⚠️ Please enter your registered email to reset password.";
    resetMessage.style.color = "orange";
    return;
  }

  try {
    await firebase.auth().sendPasswordResetEmail(email);
    resetMessage.innerHTML = `✅ Reset link sent to: <b>${email}</b><br>📩 Check Spam/Junk folder too.`;
    resetMessage.style.color = "lightgreen";
  } catch (err) {
    if (err.code === "auth/user-not-found") {
      resetMessage.textContent = "❌ Email not found. Please contact the admin.";
    } else {
      resetMessage.textContent = "❌ Error: " + err.message;
    }
    resetMessage.style.color = "red";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  const superuserEmail = "hrishavranjan2003@gmail.com";

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!email || !pass) {
      loginMessage.textContent = "⚠️ Please enter both email and password.";
      loginMessage.style.color = "orange";
      return;
    }

    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, pass);
      loginMessage.textContent = `✅ Logged in as: ${result.user.email}`;
      loginMessage.style.color = "lightgreen";

      setTimeout(() => {
        if (result.user.email === superuserEmail) {
          window.location.href = "admin.html";
        } else {
          window.location.href = "certificate.html";
        }
      }, 1000);

    } catch (err) {
      loginMessage.textContent = "❌ Login failed: " + err.message;
      loginMessage.style.color = "red";
    }
  });
});
