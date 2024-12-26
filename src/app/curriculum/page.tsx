"use client";
import ContentPage from '@/components/layout/ContentPage';
import Layout from '@/components/layout/Layout';
import React, { useRef } from 'react';

const PageCurriculum = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    return (
        <Layout>
            <div className='h-screen overflow-y-auto snap-y snap-mandatory'>
                <ContentPage bgcolor='bg-pink-500'>
                    hola contete
                </ContentPage>
                <ContentPage>
                    segundo comentaro
                </ContentPage>
            </div>
        </Layout>
    );
};

export default PageCurriculum;