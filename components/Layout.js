import Script from "next/script";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      />
      <Script
        type="text/javascript"
        src="https://www.gstatic.com/charts/loader.js"
      />
    </>
  );
}
