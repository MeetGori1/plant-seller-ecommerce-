import { Tooltip } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux';
import { nurseryStoreBlockDeleteAsync } from '../../nurserySlice';

const TemplateTwoSection = ({ content, index, handelDeleteRendersUpload, handleImageUploadNurseryStore, mergedArrow, setIsModelOpen, setAtBlockIndex, setIsCurrentTemplates, isCurrentTemplates, setIsModelOpenEdit, setIsCurrentBlock }) => {


    const dispatch = useDispatch();

    const handelOpenEditModel = (id) => {
        setIsModelOpenEdit(true);
        setIsCurrentTemplates(isCurrentTemplates);
        setIsCurrentBlock(id);
    }

    const handelDeleteBlock = (id) => {
        dispatch(nurseryStoreBlockDeleteAsync(id));
    }

    return (
        <div className='col-12 col-md-11 px-2 px-md-0'>
            {content.length > 0 ?

                <div className="p-0 template template-half-width template-images rounded" >
                    <div className="m-0 template-half-left rounded border border-black position-relative">
                        {content[0] && content[0].image.url !== "" ?
                            <div className="hover-images w-100 h-100">
                                <a href={content[0].url} target="_blank" rel="noopener noreferrer">
                                    <img src={content[0].image.url} className='w-100 img-fluid rounded' alt={content[0].title} />
                                </a>
                                <div className="position-absolute images-options">
                                    <Tooltip placement="bottomRight" title={'Re-Upload Image'} arrow={mergedArrow} onClick={() => {handelOpenEditModel(content[0]._id)}}>
                                        <span className="fas fa-pen text-primary p-2"></span>
                                    </Tooltip>
                                    <Tooltip placement="bottomRight" title={'Delete Image'} arrow={mergedArrow} onClick={() => handelDeleteBlock(content[0]._id)}>
                                        <span className="fas fa-trash text-danger p-2"></span>
                                    </Tooltip>
                                </div>
                            </div>
                            :
                            <div className="template template-header rounded d-flex justify-content-center align-items-center hover-images h-100 w-100 bg-secondary" onClick={() => { setIsModelOpen(true); setAtBlockIndex(0); setIsCurrentTemplates(isCurrentTemplates) }}>
                                <div className="template-header-complete rounded ">
                                    <p className='text-center user-select-none'><i className='fas fa-images'></i> Add Content</p>
                                </div>
                            </div>
                        }

                    </div>
                    <div className="m-0 template-half-right rounded border border-black position-relative">
                        {content[1] && content[1].image.url !== "" ?
                            <div className="hover-images w-100 h-100">
                                <a href={content[1].url} target="_blank" rel="noopener noreferrer">
                                    <img src={content[1].image.url} className='w-100 img-fluid rounded' alt={content[1].title} />
                                </a>
                                <div className="position-absolute images-options">
                                    <Tooltip placement="bottomRight" title={'Re-Upload Image'} arrow={mergedArrow} onClick={() => {handelOpenEditModel(content[1]._id)}}>
                                        <span className="fas fa-pen text-primary p-2"></span>
                                    </Tooltip>
                                    <Tooltip placement="bottomRight" title={'Delete Image'} arrow={mergedArrow} onClick={() => handelDeleteBlock(content[1]._id)}>
                                        <span className="fas fa-trash text-danger p-2"></span>
                                    </Tooltip>
                                </div>
                            </div>
                            :
                            <div className="template template-header rounded d-flex justify-content-center align-items-center h-100 w-100 hover-images bg-secondary" onClick={() => { setIsModelOpen(true); setAtBlockIndex(1); setIsCurrentTemplates(isCurrentTemplates) }} >
                                <div className="template-header-complete rounded ">
                                    <p className='text-center user-select-none'><i className='fas fa-images'></i> Add Content</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                :

                <div className="template template-half-width rounded hover-images position-relative">
                    <div className="template template-header rounded d-flex justify-content-center align-items-center hover-images bg-secondary" onClick={() => { setIsModelOpen(true); setAtBlockIndex(0); setIsCurrentTemplates(isCurrentTemplates) }}>
                        <div className="template-header-complete rounded ">
                            <p className='text-center user-select-none'><i className='fas fa-images'></i> Add Content</p>
                        </div>
                    </div>
                    <div className="template template-header rounded d-flex justify-content-center align-items-center hover-images bg-secondary" onClick={() => { setIsModelOpen(true); setAtBlockIndex(1); setIsCurrentTemplates(isCurrentTemplates) }}>
                        <div className="template-header-complete rounded ">
                            <p className='text-center user-select-none'><i className='fas fa-images'></i> Add Content</p>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default TemplateTwoSection