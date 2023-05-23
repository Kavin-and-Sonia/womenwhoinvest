export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Women who Build" />
      <meta
        name="description"
        content="A repository to celebrate the women and nonbinary people building and investing for the future."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://brazilianswho.design" />
      <meta property="og:title" content="Brazilians Who Design" />
      <meta
        property="og:description"
        content="A repository to celebrate the women and nonbinary people building and investing for the future."
      />
      <meta
        property="og:image"
        content="http://brazilianswho.design/img/preview.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://brazilianswho.design" />
      <meta property="twitter:title" content="Brazilians Who Design" />
      <meta
        property="twitter:description"
        content="A repository to celebrate the women and nonbinary people building and investing for the future."
      />
      <meta
        property="twitter:image"
        content="http://brazilianswho.design/img/preview.png"
      />
    </>
  );
}
