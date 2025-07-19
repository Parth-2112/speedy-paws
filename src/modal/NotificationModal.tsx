import { Announcement, Notification } from "../assets/NotificationIcons";

const NotificationModal = () => {
    return(
        <div>
            <div className="bg-(--primary-bg-color) absolute right-0 top-0 h-[100vh] w-[80%] md:w-[45%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%] flex flex-col items-center text-2xl rounded-l-xl z-30">
                
                <div className="w-[80%] mt-6">
                    <div className="flex flex-row">
                        <div className="w-6 fill-(--iconstext-color) pt-1.5">
                            <Announcement/>
                        </div>
                        <h1 className="text-(--iconstext-color) text-2xl tracking-wider pl-2">Announcements</h1>
                    </div>
                    <p className="text-(--primary-text-color) text-[1rem] text-center mt-8">
                        Nothing to show.
                    </p>
                </div>

                <div className="w-[75%] h-1 bg-(--tertiary-color) mt-25 rounded-xl"/>

                <div className="w-[80%] mt-6">
                    <div className="flex flex-row ">
                        <div className="w-6 fill-(--iconstext-color) pt-1.5">
                            <Notification/>
                        </div>
                        <h1 className="text-(--iconstext-color) text-2xl tracking-wider pl-2">Notifications</h1>
                    </div>
                    <p className="text-(--primary-text-color) text-[1rem] text-center mt-8">
                        Nothing to show.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotificationModal