import React from 'react';
import { Card, Rate, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

const CustomCard = ({ title, description, image, price, rating }) => {
  return (
    <Card
      hoverable
      style={{ width: 300, margin: '16px' }}
      cover={
        <img 
          alt={title} 
          src={image} 
          style={{ height: 200, objectFit: 'contain', padding: '8px' }}
        />
      }
    >
      <Meta
        title={title}
        description={
          <div className="space-y-2">
            <Text className="block text-gray-600 truncate">
              {description}
            </Text>
            
            <div className="flex justify-between items-center mt-2">
              <Text strong className="text-lg">
                ${price}
              </Text>
              <div className="flex items-center">
                <Rate disabled defaultValue={rating.rate} />
                <Text className="ml-2">({rating.count})</Text>
              </div>
            </div>
          </div>
        }
      />
    </Card>
  );
};

export default CustomCard;