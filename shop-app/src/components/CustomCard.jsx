import React from "react";
import { Card, Rate, Typography, Tooltip } from "antd";

const { Meta } = Card;
const { Text } = Typography;

const CustomCard = ({ title, description, image, price, rating }) => {
  return (
    <Card hoverable className="flex flex-col" style={{ height: "500px" }}>
      {/* Resim Bölümü */}
      <div className="flex-none h-[200px]">
        <img alt={title} src={image} className="w-full h-full object-contain" />
      </div>

      {/* İçerik Bölümü */}
      <div className="flex-grow overflow-hidden p-4">
        <Tooltip title={title}>
          <Text className="text-base font-medium truncate block">{title}</Text>
        </Tooltip>

        <div
          className="mt-2 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          <Tooltip title={description}>
            <Text className="text-gray-600">{description}</Text>
          </Tooltip>
        </div>
      </div>

      {/* Fiyat ve Rating Bölümü */}
      <div className="flex-none border-t p-4">
        <div className="flex justify-between items-center">
          <Text strong className="text-lg">
            ${price.toFixed(2)}
          </Text>
          <div className="flex items-center">
            <Rate disabled defaultValue={rating.rate} className="text-sm" />
            <Text className="ml-2 text-sm">({rating.count})</Text>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomCard;
