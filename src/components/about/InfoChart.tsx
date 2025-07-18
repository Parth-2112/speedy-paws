import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer, Tooltip } from "recharts";

interface CustomTooltipProps {
    active?: boolean;
    payload?: any[];
}

const InfoChart = () => {

    const data = [
    { name: "0", users: 83 },
    { name: "10", users: 875 },
    { name: "20", users: 4099 },
    { name: "30", users: 12297 },
    { name: "40", users: 24195 },
    { name: "50", users: 34992 },
    { name: "60", users: 41239 },
    { name: "70", users: 41319 },
    { name: "80", users: 36523 },
    { name: "90", users: 29728 },
    { name: "100", users: 23881 },
    { name: "110", users: 10192 },
    { name: "130", users: 5810 },
    { name: "140", users: 3398 },
    { name: "150", users: 1844 },
    { name: "160", users: 965 },
    { name: "170", users: 450 },
    { name: "180", users: 198 },
    { name: "190", users: 116 },
    { name: "200", users: 57 },
    { name: "210", users: 21 },
    { name: "220", users: 21 },
    { name: "230", users: 4 },
    { name: "240", users: 5 },
    { name: "250", users: 2 },
    { name: "260", users: 2 },
    { name: "270", users: 1 },
  ];

    const CustomTooltip = ({ active, payload } : CustomTooltipProps) => {
        if (active && payload && payload.length) {
            return(
                <div className="bg-(--tertiary-color) border-1 border-(--iconstext-color) p-2 rounded-md tracking-wide text-end">
                    <p className="text-(--iconstext-color-hover)">{`WPM: ${payload[0].payload.name}`}</p>
                    <p className="text-(--iconstext-color-hover)">{`Users: ${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    }

    return (

        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
                width={1000} 
                height={300} 
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <Bar type="monotone" dataKey="users" className="fill-(--secondary-color)"/>
                <XAxis dataKey="name" style={{overflow : "visible"}}/>
                <YAxis domain={[0, "dataMax"]}/>
                {/* <Bar dataKey="users" /> */}
                <Tooltip content={<CustomTooltip/>}/>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default InfoChart;