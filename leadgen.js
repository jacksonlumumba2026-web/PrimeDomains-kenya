document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    db.collection("leads").add({
      name: document.getElementById('lead-name').value,
      email: document.getElementById('lead-email').value,
      message: document.getElementById('lead-message').value,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      document.getElementById('lead-feedback').innerText = 'Thank you! We will contact you soon.';
      document.getElementById('lead-form').reset();
    });
  });
});
