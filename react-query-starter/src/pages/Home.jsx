import React, { useState } from 'react';

function Home() {
  const [noClamp, setNoClamp] = useState(true);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Home</h1>
      <p
        className={`${
          noClamp ? 'line-clamp-4' : ' line-clamp-none'
        } text-slate-800  max-w-5xl mb-2 `}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem
        quasi magnam dicta. Dolores dolor maxime quis alias dignissimos sint
        dicta perspiciatis minima neque itaque eos fuga aliquid, recusandae
        dolorem animi, nisi nam placeat? Fugiat consequuntur totam accusantium
        nostrum sed. Eveniet vero reiciendis praesentium quidem vitae
        consequatur, beatae quisquam modi. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Eos inventore porro culpa hic iure quasi
        nulla, magnam ea adipisci vitae repellendus reprehenderit consequatur
        aperiam aliquam animi dignissimos incidunt. Vero, aliquam maiores, autem
        officia ex error totam tenetur consectetur, blanditiis architecto eos
        similique! Eius cum optio architecto alias corporis, tempora cumque
        necessitatibus reiciendis illo, eos perspiciatis nam possimus quas iure.
        Alias deleniti officia mollitia culpa harum perspiciatis est ipsam!
        Exercitationem labore mollitia, ipsum dolore provident ab repudiandae,
        veniam nulla eveniet facere eius. Iure similique, quasi esse adipisci ab
        ut hic animi! Ab veritatis repellendus, autem qui voluptatum expedita!
        Eos, assumenda adipisci! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Unde officia error in sit cum tempora earum
        perferendis fuga, minima, perspiciatis voluptas expedita labore quaerat.
        Corrupti aperiam doloribus ratione animi culpa, fugit quidem?
        Perferendis, ea veniam iure voluptates reprehenderit, architecto placeat
        obcaecati explicabo sint ullam aperiam repellendus tempora quam nisi
        velit quibusdam, dolorum nobis. Eos doloribus, deserunt aperiam alias
        ducimus quam recusandae. Omnis eaque dolorem, nostrum saepe a impedit id
        harum sequi placeat ex, assumenda, praesentium aut voluptatibus. Eaque
        sit molestiae at impedit? Corrupti numquam laboriosam quam, atque ab
        perspiciatis assumenda soluta illum neque sapiente, nisi quaerat odit
        dicta quidem distinctio laborum voluptates minus rem dolorum amet
        mollitia? Tempora officiis fugit alias, nostrum eligendi in nesciunt
        debitis soluta voluptas voluptatem, illum neque saepe aliquid cupiditate
        laborum harum quas ullam. Ut eos id ducimus, sed odio iste ipsa beatae
        expedita! Eius praesentium neque aperiam architecto a cupiditate facilis
        inventore! Commodi corporis quaerat repellat qui nam aliquam libero
        repudiandae labore maxime nobis dignissimos ut tempora eos recusandae
      </p>
      <button onClick={() => setNoClamp(!noClamp)} className="text-blue-500">
        {noClamp ? 'Load more' : 'Hide'}
      </button>
    </div>
  );
}

export default Home;
