import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import { detailRewards } from "@/utils/apis/rewards";
import { exchangeRewards } from "@/utils/apis/rewards";
import { detailRewardsType } from "@/utils/types/rewards";

export default function DetailRedeem() {
  const { reward_id } = useParams<{ reward_id?: string }>(); // reward_id bisa undefined
  const [reward, setReward] = useState<detailRewardsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [redeeming, setRedeeming] = useState<boolean>(false); // State untuk proses penukaran
  const [redeemError, setRedeemError] = useState<string | null>(null); // State untuk error penukaran
  const [redeemed, setRedeemed] = useState<boolean>(false); // State untuk melacak status penukaran berhasil

  useEffect(() => {
    const fetchReward = async () => {
      if (!reward_id) {
        setError("Reward ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const data = await detailRewards(parseInt(reward_id, 10)); // pastikan reward_id adalah integer
        setReward(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReward();
  }, [reward_id]);

  const handleRedeem = async () => {
    if (!reward_id) {
      setRedeemError("Reward ID is missing.");
      return;
    }

    setRedeeming(true);
    setRedeemError(null);

    try {
      const response = await exchangeRewards(parseInt(reward_id, 10)); // Pastikan reward_id adalah integer
      console.log("Redeem success:", response);
      setRedeemed(true); // Mengatur state redeemed menjadi true jika penukaran berhasil
      // Tambahkan logika tambahan jika perlu, seperti menampilkan pesan sukses atau memperbarui state
    } catch (error: any) {
      setRedeemError(error.message);
    } finally {
      setRedeeming(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!reward) return <div>No Reward Found</div>;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center mx-2 md:mx-6">
          <div className="flex items-center justify-center">
            <img src={reward.image} alt={reward.name} width={350} height={350} className="w-full max-w-[350px] rounded-lg object-cover" />
          </div>
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{reward.name}</h1>
              <p className="text-muted-foreground mt-2">{reward.description}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">{reward.point_required} Points</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Upgrade your listening experience with our state-of-the-art wireless headphones. Featuring advanced noise-cancelling technology, premium sound quality, and a sleek, comfortable design, these headphones will transport you to
                a new level of audio bliss.
              </p>
              <Button
                size="lg"
                className="w-full bg-green-700"
                onClick={handleRedeem}
                disabled={redeeming || redeemed} // Disabled jika sedang proses penukaran atau sudah berhasil
              >
                {redeeming ? "Redeeming..." : redeemed ? "Sudah Ditukar" : "Redeem Points"} {/* Teks tombol */}
              </Button>
              {redeemError && <p className="text-red-600 mt-2">{redeemError}</p>} {/* Tampilkan error jika ada */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
