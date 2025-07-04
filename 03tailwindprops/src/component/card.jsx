import React from 'react'

function Card({username, num=1}) {
  //console.log(props.task);  

  return (
    <div className="w-60 sm:w-72 md:w-80 bg-black rounded-xl overflow-hidden shadow-lg flex flex-col text-white mb-4">
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="Bored Ape NFT"
          className="h-40 sm:h-48 object-cover object-center w-full"
        />
        <div className="p-4 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-sm sm:text-base">
              {username}
            </h1>
            <span className="text-slate-400 text-xs sm:text-sm">Price</span>
          </div>
          <div className="flex justify-between items-center text-slate-300 text-sm">
            <p>#{num}</p>
            <p>0.01 ETH</p>
          </div>
        </div>
      </div>
  )
}

export default Card
