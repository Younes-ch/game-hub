import platforms from "../data/platforms";
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({ data: platforms, error: null });


export default usePlatforms;