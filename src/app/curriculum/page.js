import ContentPage from '@/components/layout/ContentPage';
import Layout from '@/components/layout/Layout';
import React from 'react';

const pageCurriculum = () => {
    return (
        <Layout>
            <div className='flex-col'>
                <ContentPage>
                    hola contete
                </ContentPage>
                <ContentPage>
                    segundo comentaro
                </ContentPage>
            </div>
        </Layout>
    );
};

export default pageCurriculum;