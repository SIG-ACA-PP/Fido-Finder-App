import UserDetails from '../../../components/molecules/UserDetails';
import PetImage from '../../../components/atoms/PetImage';
import { IconPlus } from '@tabler/icons-react';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <main>
      <div className="px-5 flex flex-col gap-4 overflow-y-scroll">
        <UserDetails />
        <div className="font-quicksand flex items-center w-full justify-center gap-3 font-bold text-xl text-b-base-text leading-none text-center">
          <p> Mascotas </p>
          <Link to='add-pet' >
            <Button
              size='sm'
              isIconOnly
            >
              <IconPlus />
            </Button>
          </Link>
        </div>
        <PetImage alt="Pet" petName="Fido" src="img/lost-dog.jpg" />
        <PetImage alt="Pet" petName="Fido" src="img/lost-dog.jpg" />
        <PetImage alt="Pet" petName="Fido" src="img/lost-dog.jpg" />
        <PetImage alt="Pet" petName="Fido" src="img/lost-dog.jpg" />
      </div>
    </main >
  );
};

export default User;
