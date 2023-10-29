import Locale from '@/features/settings/components/locale';
import Theme from '@/features/settings/components/theme';

export default function Settings() {
  return (
    <section className="flex justify-center gap-4">
      <Theme />
      <Locale />
    </section>
  );
}
