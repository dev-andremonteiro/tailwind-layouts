import "./App.css";

function SideBarColumnWithFooter() {
  return (
    <>
      <div className="container p-2 mx-auto">
        <div className="flex flex-row flex-wrap py-4">
          <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
            <div className="sticky top-12 p-4 bg-white rounded-xl w-full">
              <ul className="nav flex flex-col overflow-hidden">
                <li className="nav-item">
                  <a
                    className="nav-link text-purple-800 hover:text-purple-600 truncate"
                    href="/#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-purple-800 hover:text-purple-600 truncate"
                    href="/#orders"
                  >
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-purple-800 hover:text-purple-600 truncate"
                    href="/#products"
                  >
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-purple-800 hover:text-purple-600 truncate"
                    href="/#customers"
                  >
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-purple-800 hover:text-purple-600 truncate"
                    href="/#reports"
                  >
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-purple-800 hover:text-purple-600 truncate"
                    href="/#intergrations"
                  >
                    Intergrations
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <h1 className="text-2xl" id="home">
              Main Content
            </h1>
            <p className="pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              dapibus dui ac posuere aliquet. Morbi sollicitudin hendrerit
              pellentesque. Fusce viverra tempor lorem ut placerat. Sed at erat
              nunc. Nam rutrum mollis cursus. Cras non tortor iaculis,
              pellentesque erat a, efficitur nunc. Morbi rhoncus massa justo, ut
              aliquam tellus fermentum sed. Vivamus porttitor finibus iaculis.
              Integer id est facilisis, sodales ipsum vel, auctor nibh. Praesent
              luctus laoreet nulla at sollicitudin. Suspendisse vel arcu id orci
              suscipit efficitur. Fusce commodo in ex in volutpat. Curabitur
              sodales sed mi sit amet porta. Donec interdum egestas libero vitae
              efficitur. Suspendisse potenti. Nam pharetra lorem eu risus
              tristique ultrices. Cras ac condimentum diam, id scelerisque diam.
              Donec feugiat vulputate nibh eget porta. Pellentesque viverra nunc
              a pellentesque maximus. Phasellus blandit vitae elit condimentum
              tristique. Mauris commodo nisl vel condimentum maximus. Vestibulum
              a pretium lectus. Sed ultrices sit amet enim vel posuere. Vivamus
              aliquam elit aliquam, faucibus sem a, suscipit lacus. Vestibulum
              dapibus dui velit, a porta lacus auctor vehicula.{" "}
            </p>
            <p className="pt-4"> The flexbox (parent) container: </p>
            <ul>
              <li>
                <span className="text-purple-700">flex</span> - for{" "}
                <code>dislay:flex</code>
              </li>
              <li>
                flex-row - for <code>flex-direction: row</code>
              </li>
              <li>
                flex-wrap - for <code>flex-wrap: wrap</code>
              </li>
              <li>
                py-4 - for <code>padding-(top|bottom): 1rem</code>
              </li>
            </ul>
            <p className="pt-4"> The aside (left) column: </p>
            <ul>
              <li>w-full - for 100% width</li>
              <li>sm:w-1/3 - for 33% width on sm and larger</li>
              <li>md:w-1/4 - for 25% width on md and larger</li>
              <li>
                px-2 - for <code>padding-(left|right): .5rem</code>
              </li>
            </ul>
            <p className="pt-4"> The main (right) column: </p>
            <ul>
              <li>w-full - for 100% width</li>
              <li>sm:w-1/3 - for 66% width on sm and larger</li>
              <li>md:w-1/4 - for 75% width on md and larger</li>
              <li>
                pt-1 - for <code>padding-top: .25rem</code>
              </li>
              <li>
                px-2 - for <code>padding-(left|right): .5rem</code>
              </li>
            </ul>
            <section className="min-h-screen" id="orders">
              <h1 className="text-2xl mt-5">Orders</h1>
              <p className="pb-4 pt-4">
                Mauris placerat rutrum augue sed vulputate. Suspendisse potenti.
                Suspendisse potenti. Sed sagittis eu massa ac molestie. Integer
                quis bibendum augue. Donec rhoncus dolor ac odio pellentesque,
                ac mattis leo aliquam. Nullam nec erat vehicula diam rhoncus
                molestie. Sed eu arcu elementum mi ullamcorper imperdiet in vel
                nunc. Vivamus dolor purus, fringilla a est eu, cursus sodales
                massa. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Ut scelerisque a massa eu
                varius. Nullam orci lorem, volutpat in tortor non, lobortis
                feugiat nulla. Interdum et malesuada fames ac ante ipsum primis
                in faucibus. Fusce ornare tortor maximus, pellentesque turpis
                at, placerat metus.
              </p>
            </section>

            <section className="min-h-screen" id="products">
              <h1 className="text-2xl mt-5">Products</h1>
              <p>
                Duis quam erat, convallis ut diam sed, laoreet porta justo.
                Quisque fermentum elementum purus, et dignissim purus imperdiet
                vel. Quisque euismod sapien non dui porttitor, et lobortis nulla
                semper. Pellentesque porttitor rhoncus justo, sit amet sagittis
                est tempor pulvinar. Donec nec leo tincidunt, vestibulum lorem
                eget, vehicula erat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc nec ligula nibh. Suspendisse ultricies
                nisl nisi, ut fermentum dui gravida sit amet. Etiam et dui sit
                amet nunc congue molestie. Vestibulum congue ex eros, at rutrum
                ligula egestas eget. Nam id convallis nisi, eget ullamcorper
                elit.
              </p>
            </section>

            <section className="min-h-screen" id="customers">
              <h1 className="text-2xl mt-5">Customers</h1>
              <p>
                Sed lectus enim, commodo non magna vitae, bibendum tempor
                lectus. Donec tellus justo, elementum vitae justo cursus,
                placerat malesuada nisi. Nunc arcu velit, vulputate vitae
                venenatis sed, rutrum ut magna. Etiam gravida orci fringilla,
                convallis nibh sed, varius odio. Vestibulum non aliquet felis.
                Nunc fringilla ullamcorper magna, in consectetur ante interdum
                a. Aenean luctus fermentum turpis condimentum blandit. Morbi
                vitae nisl in ex rhoncus molestie. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Sed elit metus, vestibulum quis orci ut, scelerisque
                gravida leo. Mauris interdum fringilla commodo. Proin a
                fermentum purus.
              </p>
            </section>

            <section className="min-h-screen" id="reports">
              <h1 className="text-2xl mt-5">Reports</h1>
              <p>
                Sed lectus enim, commodo non magna vitae, bibendum tempor
                lectus. Donec tellus justo, elementum vitae justo cursus,
                placerat malesuada nisi. Nunc arcu velit, vulputate vitae
                venenatis sed, rutrum ut magna. Etiam gravida orci fringilla,
                convallis nibh sed, varius odio. Vestibulum non aliquet felis.
                Nunc fringilla ullamcorper magna, in consectetur ante interdum
                a. Aenean luctus fermentum turpis condimentum blandit. Morbi
                vitae nisl in ex rhoncus molestie. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Sed elit metus, vestibulum quis orci ut, scelerisque
                gravida leo. Mauris interdum fringilla commodo. Proin a
                fermentum purus.
              </p>
            </section>

            <section className="min-h-screen" id="intergrations">
              <h1 className="text-2xl mt-5">Intergrations</h1>
              <p>
                Suspendisse sit amet pretium nisi, ac dignissim sapien. Donec
                posuere est eget euismod ornare. Vivamus euismod, erat non
                condimentum sagittis, justo enim lobortis lorem, sed accumsan
                ipsum magna ut nulla. Nam sodales neque id ex sagittis blandit.
                Aenean cursus imperdiet ipsum nec vestibulum. Donec lorem quam,
                venenatis vel pharetra vitae, fringilla id metus. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Sed ut sagittis lacus, eget tincidunt leo. Aenean
                a posuere felis, a placerat neque. Ut efficitur accumsan
                efficitur. Aliquam iaculis dolor arcu, facilisis porttitor massa
                fermentum ac. Quisque nec condimentum odio. Donec aliquet
                egestas pretium. Nulla nisl neque, interdum eu ullamcorper a,
                pellentesque non lectus. Donec dictum vel lectus ut accumsan.
              </p>
            </section>
          </main>
        </div>
      </div>
      <footer className="bg-black mt-auto">
        <div className="container p-4 text-white mx-auto">
          <h1 className="text-2xl">Footer</h1>
          <div className="flex">
            <div className="flex-grow flex flex-col">
              <a href="/#home">Boom</a>
              <a href="#">Boom</a>
              <a href="#">Boom</a>
              <a href="#">Boom</a>
            </div>
            <div className="flex-grow flex flex-col">
              <a href="#">Boom</a>
              <a href="#">Boom</a>
              <a href="#">Boom</a>
              <a href="#">Boom</a>
            </div>
            <div className="flex-grow flex flex-col">
              <a href="#">Boom</a>
              <a href="#">Boom</a>
              <a href="#">Boom</a>
            </div>
            <div className="flex-grow flex flex-col">
              <a href="#">Boom</a>
              <a href="#">Boom</a>
              <a href="#">Boom</a>
              <a href="#">Boom</a>
            </div>
          </div>
          <div className="text-right text-xs py-4">
            <a href="">&copy;2023 Tropical Code</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default SideBarColumnWithFooter;


