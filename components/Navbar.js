import LINK from 'next/link'


const Navbar = () => (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">BitzCost</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
    </ul>
  </div>
</nav>
</div>
);

export default Navbar
