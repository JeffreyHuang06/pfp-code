import {atom} from "recoil"

const statusAtom = atom<string[]>({
    key: "statusAtom",
    default: []
});

export default statusAtom;