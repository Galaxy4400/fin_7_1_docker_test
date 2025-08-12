import { Button } from '@/shared/ui/button';

export const MenuButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
	return (
		<div className="md:hidden">
			<Button variant="inline" onClick={onClick} active={isOpen}>
				Menu
			</Button>
		</div>
	);
};
