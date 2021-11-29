import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import FollowerItem from './FollowerItem';
import { TwitterUser } from '../models/TwitterUser';

describe("Follower Item",() =>{
    it("should render follower item component",() =>{
        let follower: Partial<TwitterUser> = {
            profile_image_url: "http://test.com/img.png",
            name: "nir",
            screen_name: "niro"
        }
        const item = render(<FollowerItem  follower={follower} ></FollowerItem>);

        expect(item).toBeDefined();
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute("src",follower.profile_image_url);
        const name = screen.getByText(follower.name);
        expect(name).toBeInTheDocument();
        expect(name.tagName).toBe("STRONG");
        const screen_name = screen.getByText(`@${follower.screen_name}`);
        expect(screen_name).toBeInTheDocument();
    })


})