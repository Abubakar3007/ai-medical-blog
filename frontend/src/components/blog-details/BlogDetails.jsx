import React from 'react';
import DefaultImage from '../../assets/images/blog-image.jpg'
import Breadcrumb from '../Breadcrumb';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const BlogDetails = ({ blog }) => {

    function formatBlogContent(content) {
        if (!content) return [];

        const blocks = content.split(/\n\s*\n/);

        // Helper to linkify URLs
        const linkifyText = (text) => {
            const urlRegex = /https?:\/\/[^\s]+/g;
            return text.split(urlRegex).reduce((acc, part, i, arr) => {
                acc.push(part);

                const match = text.match(urlRegex)?.[i];
                if (match) {
                    acc.push(
                        <a key={`link-${i}`} href={match} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                            {match}
                        </a>
                    );
                }

                return acc;
            }, []);
        };

        return blocks.map((block, index) => {
            const isProbablyHeading =
                /^[A-Z][a-zA-Z0-9\s\-:,']+$/.test(block.trim()) && !block.includes('.');

            const isProbablyHeading2 =
                block.includes('1. ') || block.includes('2. ') || block.includes('3. ') || block.includes('4. ') || block.includes('5. ') || block.includes('6. ') || block.includes('7. ') || block.includes('8. ') || block.includes('9. ');

            const contentWithLinks = linkifyText(block.trim());

            if (isProbablyHeading) {
                return <h2 key={index} className="mt-6 mb-4 text-[26px] leading-9 font-semibold text-gray-900">{contentWithLinks}</h2>;
            }

            if (isProbablyHeading2) {
                return <h3 key={index} className="mt-6 mb-4 text-xl font-semibold text-gray-900">{contentWithLinks}</h3>;
            }

            return <p key={index} className="mt-2 text-[18px] text-gray-600">{contentWithLinks}</p>;
        });
    }

    const formatDateTime = (dateString) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        };
        return new Date(dateString).toLocaleString("en-US", options);
    };

    if (!blog) return null; // Handle case where blog is undefined

    return (
        <div className='blog-details'>
            <div className='mb-4'>
                {/* breadcrumb */}
                <Breadcrumb topic={blog.topic || blog.category} />
                <h1 className='my-5 text-[32px] font-semibold leading-[48px]'>{blog.title}</h1>
                <div className='flex items-center justify-between'>
                    <div className='text-sm text-neutral-600'>
                        🕒 {formatDateTime(blog.createdAt)}
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='text-sm text-neutral-600'>Share:</span>
                        <div className='flex gap-2'>
                            <a href="facebook.com" target='_blank' className='w-8 h-8 rounded-[3px] grid place-items-center bg-[#3B5998] text-white'><FacebookIcon /></a>
                            <a href="whatsapp.com" target='_blank' className='w-8 h-8 rounded-[3px] grid place-items-center bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white'><InstagramIcon /></a>
                            <a href="telegram.com" target='_blank' className='w-8 h-8 rounded-[3px] grid place-items-center bg-[#25D366] text-white'><WhatsAppIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-8'>
                <figure>
                    <img
                        src={blog.imageUrl || blog.image || DefaultImage}  // Fallback to local image if blog.imageUrl is missing
                        alt={blog.title}
                        className="w-full"
                    />
                    {
                        blog.caption && (
                            <figcaption className='mt-2 text-sm text-center text-gray-500'>{blog.caption}</figcaption>
                        )
                    }
                </figure>
            </div>
            <div className="prose whitespace-pre-line max-w-none first-letter:text-[80px] first-letter:uppercase">
                {formatBlogContent(blog.content || blog.description || '')}
            </div>
        </div>
    );
};

export default BlogDetails;