<script setup lang="ts">
</script>

<style scoped>
footer {
  background: var(--secondary-background-color);
  display: flex;
  gap: 0.3em;
  justify-content: space-between;
  padding: 20px;
  font-family: 'Helvetica', sans-serif;
  font-size: 17px;
  align-items: center;
}


.links {
  display: flex;
  justify-content: space-between;
}

.links ul {
  width: 50%;
}

.contact-parent {
  width: 17%;
  padding: 5px;
}

.links,
.social-media-icons {
  display: flex;
  flex-direction: column;
  color: rgb(255, 255, 255);
  padding: 5px;
}

.social-media-icons {
  text-align: start;
  gap: 0.25em;
  width: 35%;
  padding: 5px;
}

.address {
  color: rgb(255, 255, 255);
  padding: 5px;
}

.contact {
  color: rgb(255, 255, 255);
  padding: 5px;
}

.copyright {
  color: rgb(255, 255, 255);
}

.copyright-parent {
  color: rgb(255, 255, 255);
  text-align: end;
  align-self: end;
}

.contact-personal {
  color: #ffffff;
}

.contact-social {
  color: #ffffff;
}

.fa-twitter-square {
  font-size: 27px;
}

.fa-facebook-square {
  font-size: 27px;
}

.fa-copyright {
  margin-right: 3px;
}

.fa-instagram-square {
  font-size: 27px;
}
.container{
  height: 22px;
}
</style>

<template>

  <footer class="container">
    <section class="links">
      <div>
        <ul>
          <li>Explore</li>
          <router-link to="/">
            <li>About</li>
          </router-link>
        </ul>
      </div>

    </section>
    <section>
      <ul class="address">
        Visit

        <li>Blacksburg, VA, 24060</li>

      </ul>
    </section>
    <section class="contact-parent">
      <div class="contact">
        <ul class="contact-personal">
          Contact
          <li><i class="fas fa-envelope"></i> ayushroy24@vt.edu</li>
        </ul>

      </div>
    </section>
    <section class="social-media-icons">
      <div class="contact">
        <ul class="contact-social">
          Follow
          <li><i class="fab fa-twitter-square"></i> <i class="fab fa-facebook-square"></i> <i
              class="fab fa-instagram-square"> </i></li>

        </ul>
      </div>
    </section>
    <section class="copyright-parent">
      <div class="copyright">
        <i class="far fa-copyright"></i>2023 Vault. All Rights Reserved.
      </div>
    </section>
  </footer>
</template>
