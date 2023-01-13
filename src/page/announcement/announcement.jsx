import '../../assets/img/react.png'
import AnCard from '../../component/announcement/anCard'
import AnDetails from './anDetails'
import AnDetails1 from './anDetails1'
const data = [
    {
        id: 1,
        title: 'استخر مجتمع 1',
        desc: `پس از مدت ها انتظار استخر مجموعه قابل استفاده شد و میتونید به راحتی رزرو کرده و برید استخر آب بازی و اینا
        شایان به ذکر است استخر در حالت عمومی و خصوصی ... قابل رزرو است برای دیدن اطلاعات بیشتر به قسمت رزرو در آینه یا همین پنل مراجعه کنید`,
        src: require('../../assets/img/react.png')
    },
    {
        id: 2,
        title: 'استخر مجتمع 2',
        desc: `پس از مدت ها انتظار استخر مجموعه قابل استفاده شد و میتونید به راحتی رزرو کرده و برید استخر آب بازی و اینا
        شایان به ذکر است استخر در حالت عمومی و خصوصی ... قابل رزرو است برای دیدن اطلاعات بیشتر به قسمت رزرو در آینه یا همین پنل مراجعه کنید`,
        src: require('../../assets/img/react.png')
    },
    {
        id: 3,
        title: 'استخر مجتمع 3',
        desc: `پس از مدت ها انتظار استخر مجموعه قابل استفاده شد و میتونید به راحتی رزرو کرده و برید استخر آب بازی و اینا
        شایان به ذکر است استخر در حالت عمومی و خصوصی ... قابل رزرو است برای دیدن اطلاعات بیشتر به قسمت رزرو در آینه یا همین پنل مراجعه کنید`,
        src: require('../../assets/img/react.png')
    },
    {
        id: 4,
        title: 'استخر مجتمع 4',
        desc: `پس از مدت ها انتظار استخر مجموعه قابل استفاده شد و میتونید به راحتی رزرو کرده و برید استخر آب بازی و اینا
        شایان به ذکر است استخر در حالت عمومی و خصوصی ... قابل رزرو است برای دیدن اطلاعات بیشتر به قسمت رزرو در آینه یا همین پنل مراجعه کنید`,
        src: require('../../assets/img/react.png')
    },
]
const Announcement = () => {
    const ListData = data.map((dataList) => {
        // console.log(data)
        return <AnCard data={dataList} />


    })
    return (
        <>
            <div className="an-main">
                    <div className="a-right">
                        <ul className="announceList">
                            {ListData}
                        </ul>
                    </div>
                <div className="a-left"><AnDetails1 data={data}/></div>
            </div>
        </>
    );
}

export default Announcement;