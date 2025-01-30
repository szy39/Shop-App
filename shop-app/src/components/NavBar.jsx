import React from "react";
import { Input, Badge, Button } from "antd";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">Shop App</h1>
          </div>

          {/* Arama Çubuğu */}
          <div className="flex-1 max-w-md mx-4">
            <Input
              placeholder="Ürün ara..."
              prefix={<SearchOutlined className="text-gray-400" />}
              className="rounded-full"
            />
          </div>

          {/* Sağ Menü */}
          <div className="flex items-center space-x-4">
            <Badge count={1} size="small">
              <Button
                type="text"
                icon={<ShoppingCartOutlined className="text-xl" />}
                className="flex items-center"
              >
                <span className="ml-1">Sepet</span>
              </Button>
            </Badge>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
