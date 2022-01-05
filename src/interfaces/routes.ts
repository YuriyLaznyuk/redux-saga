import React from 'react';

export interface IRoute {
	path: string;
	name: string;
	element: React.ReactNode | null;
}
