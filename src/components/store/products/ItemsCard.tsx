import Image from "next/image";

export default function ItemsCard({ orderItem }: { orderItem: any }) {
  return (
    <div className="w-60 flex flex-col relative overflow-hidden mt-4">
      <div className="w-full h-[18rem] cursor-pointer">
        <Image
          src={
            orderItem.product.main_image
              ? orderItem.product.main_image
              : "/defaultImage.png"
          }
          alt="Product Image"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="leading-6 mt-2">
        <p>{orderItem.product.name}</p>
        <small className="text-gray-400">
          {" "}
          <span>Quantité:</span> {orderItem.quantity}
        </small>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <small className="text-gray-400">
            {" "}
            <span>Taille:</span> {orderItem.size}
          </small>
        </div>
      </div>
    </div>
  );
}
