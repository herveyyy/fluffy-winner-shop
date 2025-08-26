"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";

type Props = {
    onSearch?: (query: string) => void;
    onFilter?: (priceRange: string) => void;
};

const ProductFilters: React.FC<Props> = ({ onSearch, onFilter }) => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        if (onSearch) onSearch(value);
    };

    const handleFilterChange = (value: string) => {
        setFilter(value);
        if (onFilter) onFilter(value);
    };

    return (
        <aside className="z-20 relative">
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 mb-4 font-bold uppercase bg-yellow-300 border-4 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition"
            >
                {isOpen ? <FaTimes /> : <FaFilter />}
                <span className="hidden md:inline">
                    {isOpen ? "Hide Filters" : "Show Filters"}
                </span>
            </Button>

            {/* Filters Panel */}
            {isOpen && (
                <div className="absolute border-4 border-black bg-yellow-100 p-4 rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    <h2 className="font-extrabold text-xl mb-4 uppercase">
                        Filters
                    </h2>

                    {/* Search + Filter */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 p-4 bg-yellow-200 border-2 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        {/* Search Input */}
                        <div className="flex items-center gap-2 mr-4 w-full max-w-md">
                            <FaSearch className="text-xl text-black" />
                            <Input
                                type="text"
                                value={search}
                                onChange={handleSearchChange}
                                placeholder="Search products..."
                                className="flex-1 px-4 py-2 border-2 border-black rounded-md 
                focus:outline-none shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            />
                        </div>

                        {/* Price Filter */}
                        <Select
                            onValueChange={handleFilterChange}
                            value={filter}
                        >
                            <SelectTrigger className="w-[180px] border-2 rounded-2xl border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                <SelectValue placeholder="Filter by price" />
                            </SelectTrigger>
                            <SelectContent className="border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                <SelectGroup>
                                    <SelectLabel>Price</SelectLabel>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="0-100">
                                        $0 - $100
                                    </SelectItem>
                                    <SelectItem value="100-200">
                                        $100 - $200
                                    </SelectItem>
                                    <SelectItem value="200-500">
                                        $200 - $500
                                    </SelectItem>
                                    <SelectItem value="500+">$500+</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            )}
        </aside>
    );
};

export default ProductFilters;
