import "./fixedsidebarfluidfixed.css";
import Footer from "../components/Footer";

function FixedSidebarFluidFixedSidebar() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row flex-wrap lg:flex-nowrap py-4 flex-grow">
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-4">
          <div className="sticky top-0 p-4 bg-gray-100 rounded-xl w-full h-full">
            <ul className="nav flex lg:flex-col overflow-hidden content-center justify-center">
              <li className="nav-item py-2 hover:bg-indigo-300 rounded">
                <a className="nav-link truncate">
                  <span className="fa fa-home mr-2" />
                  <span className="hidden sm:inline">Home</span>
                </a>
              </li>
              <li className="py-2 hover:bg-indigo-300 rounded">
                <a className="nav-link truncate" href="#">
                  <i className="fa fa-cart-plus mr-2" />
                  <span className="hidden sm:inline">Settings</span>
                </a>
              </li>
              <li className="py-2 hover:bg-indigo-300 rounded">
                <a className="nav-link truncate" href="#">
                  <span className="fa fa-cart-plus mr-2" />
                  <span className="hidden sm:inline">Products</span>
                </a>
              </li>
              <li className="py-2 hover:bg-indigo-300 rounded">
                <a className="nav-link truncate" href="#">
                  <i className="fa fa-chart-bar mr-2" />
                  <span className="hidden sm:inline">Reports</span>
                </a>
              </li>
              <li className="py-2 hover:bg-indigo-300 rounded">
                <a className="nav-link truncate" href="#">
                  <span className="fa fa-layer-group mr-2" />
                  <span className="hidden sm:inline">Integrations</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <main className="w-full flex-grow pt-1 px-3">
          <h1 className="text-3xl md:text-5xl mb-4 font-extrabold" id="home">
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
            Donec feugiat vulputate nibh eget porta. Pellentesque viverra nunc a
            pellentesque maximus. Phasellus blandit vitae elit condimentum
            tristique. Mauris commodo nisl vel condimentum maximus. Vestibulum a
            pretium lectus. Sed ultrices sit amet enim vel posuere. Vivamus
            aliquam elit aliquam, faucibus sem a, suscipit lacus. Vestibulum
            dapibus dui velit, a porta lacus auctor vehicula.
          </p>

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
            Donec feugiat vulputate nibh eget porta. Pellentesque viverra nunc a
            pellentesque maximus. Phasellus blandit vitae elit condimentum
            tristique. Mauris commodo nisl vel condimentum maximus. Vestibulum a
            pretium lectus. Sed ultrices sit amet enim vel posuere. Vivamus
            aliquam elit aliquam, faucibus sem a, suscipit lacus. Vestibulum
            dapibus dui velit, a porta lacus auctor vehicula.
          </p>

          <div className="hidden p-3 bg-indigo-600 rounded text-white lg:flex">
            <span className="flex-shrink overflow-hidden whitespace-nowrap">
              &lt;--------
            </span>
            <div className="flex-grow flex-shrink-0 overflow-ellipsis text-center">
              This center column is fluid so it grows in width as needed!
            </div>
            <span className="flex-shrink overflow-hidden whitespace-nowrap">
              --------&gt;
            </span>
          </div>
        </main>
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-2">
          <div className="flex lg:flex-col px-2">
            <div className="bg-gray-50 rounded-xl border mb-3 w-full">
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block text-indigo-600">
                    Made with Tailwind CSS!
                  </span>
                </h2>
              </div>
            </div>
            <div className="p-2" />
            <div className="bg-gray-100 rounded-xl mb-3 w-full">
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                </h2>
              </div>
            </div>
            <div className="p-2" />
            <div className="bg-gray-50 rounded-xl border mb-3 w-full">
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block text-indigo-600">
                    Play free at Codeply today.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FixedSidebarFluidFixedSidebar;
