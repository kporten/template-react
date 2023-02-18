import GettingStarted from './components/getting-started';
import Users from './components/users';

export default function Index() {
  return (
    <section>
      <GettingStarted />
      <div className="mt-16">
        <Users />
      </div>
    </section>
  );
}
